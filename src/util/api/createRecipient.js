/**
 * 
 * @param {*} name: 이름
 * @param {*} backgroundColor: 색
 * @param {*} backgroundImageURL: 이미지 경로 
 * @returns: 생성된 Recipient객체 정보
 */

export async function createRecipient(
  name,
  backgroundColor,
  backgroundImageURL
) {
  // 초기 객체에는 name만 포함
  let recipientData = { name };

  // backgroundColor가 빈 문자열이 아니면 객체에 추가
  if (backgroundColor !== "") {
    recipientData.backgroundColor = backgroundColor;
  }

  // backgroundImageURL이 빈 문자열이 아니면 객체에 추가
  if (backgroundImageURL !== "") {
    recipientData.backgroundImageURL = backgroundImageURL;
  }

  const response = await fetch(
    "https://rolling-api.vercel.app/5-8/recipients/",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(recipientData), // 수정된 recipientData 사용
    }
  );

  if (!response.ok) {
    throw new Error("Error creating recipient");
  }

  return await response.json();
}

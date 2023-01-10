// index.html을 열어서 agoraStatesDiscussions 배열 요소를 확인하세요.
console.log(agoraStatesDiscussions);

// convertToDiscussion은 아고라 스테이츠 데이터를 DOM으로 바꿔줍니다.
const convertToDiscussion = (obj) => {
  const li = document.createElement("li"); // li 요소 생성
  li.className = "discussion__container"; // 클래스 이름 지정

    //왼쪽 컨텐츠
  const avatarWrapper = document.createElement("div");
  avatarWrapper.className = "discussion__avatar--wrapper";
  //이미지
  const discussionImage = document.createElement("img");
  discussionImage.className = "discussion__avatar--image";
  discussionImage.src = obj.avatarUrl
  discussionImage.alt = 'avatar of' + obj.author;
  avatarWrapper.append(discussionImage);

    //중간 컨텐츠
  const discussionContent = document.createElement("div");
  discussionContent.className = "discussion__content";
  //h2타이틀과 링크
  const discussionTitle = document.createElement("h2");
  discussionTitle.className = "discussion__title";
  const titleAnchor  = document.createElement("a");
  titleAnchor.href = obj.url;
  titleAnchor.textContent = obj.title;
  discussionTitle.append(titleAnchor);
  //information
  const discussionInformation = document.createElement("div");
  discussionInformation.className = "discussion__information";
  discussionInformation.textContent = `${obj.author} / ${new Date(obj.createdAt).toLocaleTimeString()}`;
  
  discussionContent.append(discussionTitle, discussionInformation);
  
    //오른쪽 컨텐츠
  const discussionAnswered = document.createElement("div");
  discussionAnswered.className = "discussion__answered";
  //체크박스 이미지
  const checked = document.createElement("p");
  checked.textContent = obj.answer ? "☑" : "☒";
  discussionAnswered.append(checked);
  
  li.append(avatarWrapper, discussionContent, discussionAnswered);
  return li;
};

// agoraStatesDiscussions 배열의 모든 데이터를 화면에 렌더링하는 함수입니다.
const render = (element) => {
  for (let i = 0; i < agoraStatesDiscussions.length; i += 1) {
    element.append(convertToDiscussion(agoraStatesDiscussions[i]));
  }
  return;
};

// ul 요소에 agoraStatesDiscussions 배열의 모든 데이터를 화면에 렌더링합니다.
const ul = document.querySelector("ul.discussions__container");
render(ul);

import React from "react";
import cover from "../../assets/flamengnawaNew.png";
import CommentsContainer from "../../components/containers/blogs/CommentsContainer";

export default function ArticleDetails() {
  return (
    <div className="font-description gap-5 min-h-screen flex flex-col items-center py-10 px-20">
      <div className="h-96 w-full">
        <img src={cover} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="text-center">
        <p className="text-3xl">Article Name</p>
        <p className="text-center text-sm text-white/50">author | 19-02-2024</p>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis aliquid
        doloribus veniam soluta neque nostrum distinctio, eum adipisci? Sequi
        perferendis enim id praesentium aperiam tenetur facere voluptas nesciunt
        laudantium sed!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis aliquid
        doloribus veniam soluta neque nostrum distinctio, eum adipisci? Sequi
        perferendis enim id praesentium aperiam tenetur facere voluptas nesciunt
        laudantium sed!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis aliquid
        doloribus veniam soluta neque nostrum distinctio, eum adipisci? Sequi
        perferendis enim id praesentium aperiam tenetur facere voluptas nesciunt
        laudantium sed!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis aliquid
        doloribus veniam soluta neque nostrum distinctio, eum adipisci? Sequi
        perferendis enim id praesentium aperiam tenetur facere voluptas nesciunt
        laudantium sed!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis aliquid
        doloribus veniam soluta neque nostrum distinctio, eum adipisci? Sequi
        perferendis enim id praesentium aperiam tenetur facere voluptas nesciunt
        laudantium sed!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis aliquid
        doloribus veniam soluta neque nostrum distinctio, eum adipisci? Sequi
        perferendis enim id praesentium aperiam tenetur facere voluptas nesciunt
        laudantium sed!
      </p>
      <CommentsContainer />
    </div>
  );
}

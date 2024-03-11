import React from "react";
import Slider from "react-slick";

const SliderComp = () => {
  const settings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider {...settings}>
        <div className="!flex items-center bg-gray-100 px-6">
          <div className=" ">
            <div className="text-5xl font-bold">Öne Çıkan Ürünler</div>
            <div className="text-lg my-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil
              vero consequuntur numquam sed porro tempore, omnis dolor ullam
              voluptate quo earum repellat mollitia quidem perferendis neque
              minus sapiente aliquam sunt.
            </div>
            <div className="border rounded-full cursor-pointer text-3xl w-[200px] h-16 flex items-center justify-center bg-gray-50 hover:scale-95">
              İncele
            </div>
          </div>
          <h3>
            <img
              src="https://static.nike.com/a/images/t_PDP_864_v1,f_auto,q_auto:eco/uirypqqxq83mwcjbf9ej/air-monarch-4-antrenman-ayakkabısı-VrTWXJJn.png"
              alt=""
            />
          </h3>
        </div>
        <div className="!flex items-center bg-gray-100 px-6">
          <div className=" ">
            <div className="text-5xl font-bold">Öne Çıkan Ürünler</div>
            <div className="text-lg my-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil
              vero consequuntur numquam sed porro tempore, omnis dolor ullam
              voluptate quo earum repellat mollitia quidem perferendis neque
              minus sapiente aliquam sunt.
            </div>
            <div className="border rounded-full cursor-pointer text-3xl w-[200px] h-16 flex items-center justify-center bg-gray-50 hover:scale-95">
              İncele
            </div>
          </div>
          <h3>
            <img
              src="https://static.nike.com/a/images/t_PDP_864_v1,f_auto,q_auto:eco/60d2e87c-9eaa-46a0-b9aa-0f730291262b/air-force-1-07-ayakkab%C4%B1s%C4%B1-SqKG2H.png"
              alt=""
            />
          </h3>
        </div>
      </Slider>
    </div>
  );
};

export default SliderComp;

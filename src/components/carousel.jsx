import { Carousel, Typography, Button } from "@material-tailwind/react";
import img1 from "../assets/images/Img 01.png"
import img2 from "../assets/images/Img 02.svg"
import img3 from "../assets/images/Img 03.svg"
import img4 from "../assets/images/Img 04.svg"

export function CarouselWithContent() {
  return (
    <Carousel className="rounded-xl">
      <div className="relative h-full w-full ">
        <img
          src={img1}
          alt="image 1"
          className="h-full w-full object-cover "
        />
        <div className="absolute inset-0 grid h-full w-full items-center ">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="black"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
               Gold big hoops
            </Typography>
            <Typography
              variant="lead"
              color="black"
              className="mb-12 opacity-80"
            >
              $ 68.00
            </Typography>
            <div className="flex justify-center gap-2">
              <Button size="lg" color="black">
                View Product
              </Button>
              
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img
          src={img2}
          alt="image 2"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-center ">
          <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
            <Typography
              variant="h1"
              color="black"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              Gold big hoops
            </Typography>
            <Typography
              variant="lead"
              color="black"
              className="mb-12 opacity-80"
            >
              $ 68.00
            </Typography>
            <div className="flex gap-2">
              <Button size="lg" color="black">
                View Product
              </Button>
              
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img
          src={img3}
          alt="image 3"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-end ">
          <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
            <Typography
              variant="h1"
              color="black"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
               Gold big hoops
            </Typography>
            <Typography
              variant="lead"
              color="black"
              className="mb-12 opacity-80"
            >
              $ 68.00
            </Typography>
            <div className="flex gap-2">
              <Button size="lg" color="black">
                View Product
              </Button>
              
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img
          src={img4}
          alt="image 3"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full items-end ">
          <div className="w-3/4 pl-12 pb-12 md:w-2/4 md:pl-20 md:pb-20 lg:pl-32 lg:pb-32">
            <Typography
              variant="h1"
              color="black"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
               Gold big hoops
            </Typography>
            <Typography
              variant="lead"
              color="black"
              className="mb-12 opacity-80"
            >
              $ 68.00
            </Typography>
            <div className="flex gap-2">
              <Button size="lg" color="black">
                View Product
              </Button>
              
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  );
}

export default CarouselWithContent
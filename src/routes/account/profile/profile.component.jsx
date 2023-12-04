import SpeedMenuBar from "../../../components/speedMenuBar/speedMenuBar.component";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SliderSide } from "../../../components/slider-side/sliderside.component";

const Profile = () => {
  return (
    <>
      <SpeedMenuBar />
      <div className="flex justify-center pt-10">
        <Card className="w-[350px] shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]">
          <CardHeader>
            <CardTitle>titre</CardTitle>
          </CardHeader>
          <CardContent>
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <span>{name}name</span>
                </div>
                <div className="flex flex-col space-y-1.5">
                  <span>{name}name</span>
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline">Cancel</Button>
            <SliderSide />
          </CardFooter>
        </Card>
      </div>
    </>
  );
};

export default Profile;

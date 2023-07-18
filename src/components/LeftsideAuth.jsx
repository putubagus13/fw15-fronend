import ToyFace2 from "../assets/ToyFaces2.png";
import ToyFace1 from "../assets/ToyFaces1.png";

const LeftsideAuth = () => {
  return (
    <div className="hidden md:block md:flex-1 bg-primary relative">
      <img className="absolute top-[367px] right-[157px]" src={ToyFace2} alt="ToyFaces2"/>
      <div className="absolute rotate-180 h-[194px] w-[394px] top-[510px] right-[50px] bg-gradient-to-b from-primary to-transparent "></div>
      <img className="absolute top-[273px] right-[318px]" src={ToyFace1} alt="ToyFaces1"/>
      <div className="absolute rotate-180 h-[250px] w-[480px] top-[480px] right-[190px] bg-gradient-to-b from-primary to-transparent "></div>
    </div>
  );
};

export default LeftsideAuth;
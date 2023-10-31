import { Avatar, Card } from "ui";
import Image from "next/image";
export const VehicleInfo = () => {
  return (
    <Card title="Honda Vitz" titleSize="sm">
      <div className="flex gap-4">
        <div className="basis-2/5 grow">
            <ul>
                <li>
                    <div>
                        Number Plate: CESB91
                    </div>
                </li>
            </ul>
        </div>
        <div>
          <Image
            src="https://res.cloudinary.com/dwacr3zpp/image/upload/v1698752575/American_Honda_Motor_Co_2018_Honda_Fit.jpg"
            width="400"
            height="400"
            alt="Vehicle"
          />
        </div>
      </div>
    </Card>
  );
};

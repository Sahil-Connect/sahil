import { Card, IconButton } from "ui";
import { HiOutlinePlusCircle } from "react-icons/hi2";
export const BusinessesOverview = () => {
    return (
        <div className="space-y-2 basis-2/5 grow">
          <div className="flex items-center justify-between">
            <div className="flex gap-2 items-center">
              <h3 className="text-lg">Businesses</h3>
              <IconButton icon={HiOutlinePlusCircle} title="Add" />
              <div className="badge badge-accent">34 businesses</div>
            </div>
            <button className="btn btn-xs btn-secondary">View All</button>
          </div>
          <div className="flex gap-2">
            <div className="basis-1/4">
              <Card title="Milk 7L" titleSize="sm">
                <p>Cheben Gabriel</p>
              </Card>
            </div>
            <div className="basis-1/4">
              <Card title="Milk 7L" titleSize="sm">
                <p>Cheben Gabriel</p>
              </Card>
            </div>
          </div>
        </div>
    )
}
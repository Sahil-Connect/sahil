import { Card, Table, SplitButton } from "ui";
import { HiOutlineArrowDown, HiOutlinePlus, HiOutlinePencil } from "react-icons/hi2";



export default function InventoryPage() {

    const onOptionClick = () => {}
  return (
    <div>
      <Card>
        <div className="flex justify-between">
          <div>
            <h3>Inventory</h3>
          </div>
          <div>
            <SplitButton 
            primaryActionLabel="Add Product"
            primaryActionIcon={HiOutlinePlus}
            dropdownOptions={[
                {
                    label: "Hello",
                    onClick: onOptionClick
                },
                {
                    label: "Hello",
                    onClick: onOptionClick
                }
            ]}
            />
          </div>
        </div>
      </Card>
      <Table />
    </div>
  );
}

import { Business } from "@sahil/lib/graphql/__generated__/graphql";
import { Card, FormControl } from "ui";
import { HiArrowSmallLeft, HiArrowSmallRight } from "react-icons/hi2";

export const BusinessPreferencesInfo = () => {
  return (
    <Card>
      <h3>Business Preferences</h3>
      <FormControl label="Preferred Contact Method">
        <input
          type="text"
          className="input input-sm input-bordered w-full bg-gray-100"
          placeholder="Keji's Foods"
        />
      </FormControl>
      <div className="btn btn-sm btn-primary w-fit">
        <input type="submit" value="Continue" />
        <HiArrowSmallRight />
      </div>
    </Card>
  );
};

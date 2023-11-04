import { FC } from "react";
import { Icon, IconProps } from "./Icon";

export type IconButtonProps = IconProps & {
    title?: string;
}

export const IconButton: FC<IconButtonProps> = ({ icon, title }) => {
    return (
        <button className="btn btn-sm btn-circle" title={title}>
            <Icon icon={icon} />
        </button>
    )
}
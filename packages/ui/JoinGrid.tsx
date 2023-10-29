import { FC } from "react";

export type JoinGridProps = {
    children: any;
    cols?: number;
};
export const JoinGrid: FC<JoinGridProps> = ({ children, cols = 2 }) => {
    return (
        <div className={`join grid grid-cols-${cols}`}>
            {children}
        </div>
    )
}
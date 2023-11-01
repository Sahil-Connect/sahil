import { FC } from "react";

export type JoinGridProps = {
    children: any;
    cols?: number;
};
export const JoinGrid: FC<JoinGridProps> = ({ children, cols = 2 }) => {
    const classes = `join grid grid-cols-${cols}`;
    return (
        <div className={classes}>
            {children}
        </div>
    )
}
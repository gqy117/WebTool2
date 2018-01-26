export interface Image {
    health00to19: string;
    health80plus: string;
}

export const Images: Image = {
    health00to19: require("./health-00to19.svg") as string,
    health80plus: require("./health-80plus.svg") as string,
};

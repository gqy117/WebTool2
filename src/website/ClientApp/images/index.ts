export interface Image {
    health00to19: string;
    health20to39: string;
    health40to59: string;
    health60to79: string;
    health80plus: string;
}

export const Images: Image = {
    health00to19: require("./health-00to19.svg") as string,
    health20to39: require("./health-20to39.svg") as string,
    health40to59: require("./health-40to59.svg") as string,
    health60to79: require("./health-60to79.svg") as string,
    health80plus: require("./health-80plus.svg") as string,
};

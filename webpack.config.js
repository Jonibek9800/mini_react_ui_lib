const path = require("path");

module.exports = {
    mode: "production",
    entry: path.resolve(__dirname, "./src/index.ts"),
    output: {
        filename: "index.js",
        path: path.resolve(__dirname, "dist"),
        libraryTarget: "umd",
        clean: true,
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"],
    },
    externals: {
        react: "react",
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)?$/,
                use: [{ loader: "ts-loader" }],
                exclude: /node_modules/,
            },
        ],
    },
};

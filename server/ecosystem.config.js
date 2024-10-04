module.exports = {
    apps: [
      {
        name: "kira",
        script: "npm",
        args: "run dev",
        env: {
          NODE_ENV: "development",
        },
      },
    ],
  };
  
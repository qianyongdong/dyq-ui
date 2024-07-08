export const makeInstaller = (components: any[]) => {
  const install = (app: any) => {
    components.forEach((c) => {
      app.use(c);
    });
  };

  return {
    install,
  };
};

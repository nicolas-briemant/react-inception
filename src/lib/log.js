export const log = (meta) => {
  const envs = [process.env.NODE_ENV, process.env.TARGET_ENV, process.env.APP_ENV];
  console.info(`[${envs.join('#')}]::[${meta.name}@${meta.version}]`);
};

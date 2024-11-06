import {withSentryConfig} from '@sentry/nextjs';
import withTM from "next-transpile-modules";

const transpileModules = withTM([
    "three",
    "react-three-fiber",
    "drei",
]);

/** @type {import('next').NextConfig} */
const nextConfig = {
    ...withTM(),
    output: 'export',
    typescript: {
        ignoreBuildErrors:true,
    },
    webpack (config, options) {
        config.module.rules.push({
            test: /.*\.(glb|gltf)$/,
            use: {
                loader: 'file-loader',
            }
        })
        return config;
    },
    // webpack: (config) => {
    //     config.module.rules.push({
    //         test: /\.(glb|gltf)$/,
    //         use: [
    //             {
    //             loader: 'file-loader',
    //             options: {
    //                 outputPath: 'static/models/',
    //                 publicPath: '/_next/static/models/',
    //             },
    //             },
    //         ],
    //         type: 'asset/resource',
    //         generator: {
    //             filename: 'static/media/[name].[hash][ext]',
    //         },
    //     });
    //     return config
    // }
};

export default withSentryConfig(nextConfig, {
// For all available options, see:
// https://github.com/getsentry/sentry-webpack-plugin#options

org: "matthew-shi",
project: "javascript-nextjs",

// Only print logs for uploading source maps in CI
silent: !process.env.CI,

// For all available options, see:
// https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

// Upload a larger set of source maps for prettier stack traces (increases build time)
widenClientFileUpload: true,

// Uncomment to route browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers.
// This can increase your server load as well as your hosting bill.
// Note: Check that the configured route will not match with your Next.js middleware, otherwise reporting of client-
// side errors will fail.
// tunnelRoute: "/monitoring",

// Hides source maps from generated client bundles
hideSourceMaps: true,

// Automatically tree-shake Sentry logger statements to reduce bundle size
disableLogger: true,

// Enables automatic instrumentation of Vercel Cron Monitors. (Does not yet work with App Router route handlers.)
// See the following for more information:
// https://docs.sentry.io/product/crons/
// https://vercel.com/docs/cron-jobs
automaticVercelMonitors: true,
});
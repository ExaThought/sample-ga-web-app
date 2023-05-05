import Document, { Html, Head, Main, NextScript,DocumentContext } from "next/document";
// import newrelic from "newrelic";
const newrelic= require("newrelic")
import { logger } from "../components/Logger";


class MyDocument extends Document {
  // static async getInitialProps(
  //   ctx
  // ) {
    // const initialProps = await Document.getInitialProps(ctx);

    // /**
    //  * For SSG pages the build is faster than the agent connect cycle
    //  * In those cases, let's wait for the agent to connect before getting
    //  * the browser agent script.
    //  */
    // // if (!newrelic.agent.collector.isConnected()) {
    // //   // console.log("FIRST",newrelic)
    // //   await new Promise((resolve) => {
    // //     console.log("INSIDE")
    // //     newrelic.setUserID("user-1234-id");
    // //     newrelic.setTransactionName("test-transaction-name")
    // //     // newrelic.agent.on("connected", resolve);
    // //   });
    // // }

    // const browserTimingHeader =  newrelic.getBrowserTimingHeader({
    //   hasToRemoveScriptWrapper: true,
    //   allowTransactionlessInjection: true,
    // });
    // console.log("AFTER",newrelic.agent)
    // logger.info("NextJs New Relic redirecting to a page", {
    //   application: "NextJs NewRelic app logging",
    //   test: "Testing logging",
    //   pathname: "test path",
    // });
    // newrelic.setUserID("user-1234-id");
    // newrelic.setTransactionName("test-transaction-name")
    // newrelic.recordCustomEvent({eventType: "test-event-123", attributes: {"test":"1234"}});
    // return {
    //   ...initialProps,
    //   // browserTimingHeader,
    // };
  // const data=newrelic.setUserID("newrelicUserId");
  // console.log("DATA",data)
  //   return{
  //     ...initialProps,
  //     data
  //   }
  // }
  render() {
    return (
      <Html>
        <Head>
        <script async type="text/javascript" src="/js/newrelic.js" />
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                page_path: window.location.pathname,
            });
            `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

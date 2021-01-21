import { useEffect } from 'react';

export type DokoEnv = 'development' | 'staging' | 'production';
export type DokoFact = {
  key: string;
  value: string;
};

export const useDoko = ({
  env,
  title,
  subtitle,
  facts,
  report,
}: {
  env: DokoEnv;
  title: string;
  subtitle: string;
  facts?: DokoFact[];
  report?: string;
}) => {
  useEffect(() => {
    if (env) {
      const metaEnv = document.createElement('meta');
      metaEnv.setAttribute('name', 'doko:environment');
      metaEnv.setAttribute('content', env);
      document.head.appendChild(metaEnv);
    }
    if (title) {
      const metaTitle = document.createElement('meta');
      metaTitle.setAttribute('name', 'doko:title');
      metaTitle.setAttribute('content', title);
      document.head.appendChild(metaTitle);
    }
    if (subtitle) {
      const metaSubtitle = document.createElement('meta');
      metaSubtitle.setAttribute('name', 'doko:subtitle');
      metaSubtitle.setAttribute('content', subtitle);
      document.head.appendChild(metaSubtitle);
    }
    if (facts && facts.length > 0) {
      facts.forEach(fact => {
        const metaFact = document.createElement('meta');
        metaFact.setAttribute('name', 'doko:fact');
        metaFact.setAttribute('content', `${fact.key}|${fact.value}`);
        document.head.appendChild(metaFact);
      });
    }
    if (report) {
      // Validate url
      try {
        new URL(report);
      } catch (e) {
        console.warn(
          `DOKO: Incorrect Report format. Report should be a valid url, beginning with http(s) but found '${report}'`
        );
      }
      const metaReport = document.createElement('meta');
      metaReport.setAttribute('name', 'doko:report');
      metaReport.setAttribute('content', report);
      document.head.appendChild(metaReport);
    }
  }, [env, facts, report, subtitle, title]);
};

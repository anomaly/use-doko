import { renderHook } from '@testing-library/react-hooks';
import useDoko from '../src';

describe('Hook', () => {
  it('applies meta tags', () => {
    const env = 'development';
    const title = 'Test';
    const subtitle = 'hook';
    const report = 'https://github.com/org/repo/issues/new';
    const facts = [{ key: 'Key', value: 'Value' }];
    renderHook(() =>
      useDoko({
        env,
        title,
        subtitle,
        report,
        facts,
      })
    );

    expect(
      document.querySelectorAll("meta[name^='doko:']").length
    ).toBeGreaterThan(0);
    expect(
      (document.querySelector(
        "meta[name='doko:environment']"
      ) as HTMLMetaElement).content
    ).toBe(env);
    expect(
      (document.querySelector("meta[name='doko:title']") as HTMLMetaElement)
        .content
    ).toBe(title);
    expect(
      (document.querySelector("meta[name='doko:subtitle']") as HTMLMetaElement)
        .content
    ).toBe(subtitle);
    expect(
      (document.querySelector("meta[name='doko:report']") as HTMLMetaElement)
        .content
    ).toBe(report);
  });
});

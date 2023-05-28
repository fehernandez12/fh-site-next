abstract class ScrollUtils {
  static scrollTo = (element: HTMLElement, to: number, duration: number) => {
    var start = document.scrollingElement?.scrollTop || 0,
      change = to - start!,
      currentTime = 0,
      increment = 20;
    var animateScroll = () => {
      var easeInOutQuad = (t: number, b: number, c: number, d: number) => {
        t /= d / 2;
        if (t < 1) {
          return (c / 2) * t * t + b;
        }
        t--;
        return (-c / 2) * (t * (t - 2) - 1) + b;
      };
      currentTime += increment;
      var val = easeInOutQuad(currentTime, start, change, duration);
      document.scrollingElement!.scrollTop = val;
      if (currentTime < duration) {
        setTimeout(animateScroll, increment);
      }
    };
    animateScroll();
  };
}

export { ScrollUtils };

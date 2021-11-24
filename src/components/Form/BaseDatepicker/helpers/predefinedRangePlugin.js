
export const predefinedRangePlugin = function () {
  return function(fp) {
    const pluginData = {};

    return {
      onReady() {
        // keep in mind - "this" is bound to the flatpickr instance
        
        pluginData.predefRanges = this._createElement<HTMLDivElement>(
          "div",
          "someClassName"
        );

        const weekOne = this._createElement<HTMLAnchorElement>(
          "a",
          "someClassName",
          "Set Week 1"
        );

        weekOne.addEventListener(
          "click", 
          () => {
            const start = new Date(this.currentYear, this.currentMonth, 1);
            const end = new Date(this.currentYear, this.currentMonth, 8);
            fp.setDate([start, end], false);
          }
        );

        // then add some children
        pluginData.predefRanges.appendChild(weekOne);
        this.calendarContainer.appendChild(pluginData.predefRanges);
      },
    };
  };
}

export default { predefinedRangePlugin };
function someWeekDate(week: number = 0, day: number = 0, startWith: number = 0) {
    const date = new Date();
    return new Date(+date + (week * 7 + day + startWith - date.getDay()) * 86400000);
}
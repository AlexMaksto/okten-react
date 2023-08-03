const task4 = "/task4";

const routersURL = {
    MAIN: "",
    TASK1: "/task1",
    TASK2: "/task2",
    TASK3: "/task3",
    TASK4: {
        MAIN: `${task4}`,
        USERS:  `${task4}/users`,
        POSTS: `${task4}/posts`,
        COMMENTS: `${task4}/comments`
    },
    TASK5: "/task5",
    NOT_FOUND_PAGE: "*"
}

export {
    routersURL
}
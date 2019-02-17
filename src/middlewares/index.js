
export default store => next => (action) => {
    const {generateId} = action;

    if (!generateId) {
        return next(action);
    }

    action.payload.id = parseInt(Date.now() + Math.random()*1000);

    next({
        ...action,
    })
}
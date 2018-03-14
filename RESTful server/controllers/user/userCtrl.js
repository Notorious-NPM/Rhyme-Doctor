//need DB helpers

const loginCtrl = () => {
  //username/password exists ? return userinfo : declines request
}

const signupCtrl = () => {
  //username/password exists ? declines request : registers and returns userinfo
}

const followCtrl = () => {
  //user/follow id exists ? declines request : registers follow request
}

const unfollowCtrl = () => {
  //user/follow id exists ? registers unfollow request : declines request
}

export {loginCtrl, signupCtrl, followCtrl, unfollowCtrl}
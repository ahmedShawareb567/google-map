<template lang="pug">
    .login
      .w-100
        .text-center
          h1.fs-xl Login
        .container
          .row.justify-content-center
            .col-lg-6.col-md-8.col-12
              .form-group
                input.form-control(type="text" placeholder="Username or password..")
              .form-group
                input.form-control(type="text" placeholder="Password..")
              .form-group
                button.btn.btn-primary(role="button") Login

</template>
<style lang="scss" scoped>
.login {
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

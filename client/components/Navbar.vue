<template>
<div>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="/">Welcome</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
         <template v-if="$auth.$state.loggedIn">
           <b-nav-item href="/profile">Hi, {{$auth.$state.user.name}}</b-nav-item>
         </template>
         <template v-else>
            <b-nav-item href="/login">Login</b-nav-item>
            <!--<b-nav-item href="/signup">Signup</b-nav-item>-->
         </template>
      </b-navbar-nav>


    </b-collapse>
  </b-navbar>
</div>
</template>

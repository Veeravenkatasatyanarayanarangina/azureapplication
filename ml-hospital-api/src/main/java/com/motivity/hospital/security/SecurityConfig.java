//package com.motivity.Hospital.security;
//
//import org.springframework.context.annotation.Configuration;
//import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
//import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
//import org.springframework.security.crypto.factory.PasswordEncoderFactories;
//import org.springframework.security.crypto.password.PasswordEncoder;
//
//@Configuration
//@EnableWebSecurity
//public class SecurityConfig extends WebSecurityConfigurerAdapter
//{
//	 public void configure(AuthenticationManagerBuilder auth) throws Exception
//    {
//        PasswordEncoder encoder = PasswordEncoderFactories.createDelegatingPasswordEncoder();
//        auth.inMemoryAuthentication().withUser("motivity").password(encoder.encode("test123")).roles("USER","ADMIN")
//        .and().withUser("patient").password(encoder.encode("testp")).roles("USER","PATIENT")
//        .and().withUser("doctor").password(encoder.encode("testd")).roles("USER","DOCTOR");
//    }
//
//	@Override
//	protected void configure(HttpSecurity http) throws Exception {
//	
//		http
//        .csrf().disable()
//        .authorizeRequests()
//        .antMatchers("/").authenticated()
//        .antMatchers("/home").authenticated()
//        .antMatchers("/doctorregistration.jsp").hasRole("ADMIN")
//        .antMatchers("/doctorlogin.jsp").hasAnyRole("ADMIN","DOCTOR")
//        .antMatchers("/patient_login.jsp").hasAnyRole("PATIENT")
//        .and()
//        .formLogin().loginPage("/login").defaultSuccessUrl("/home", true).permitAll()
//      
//        .and().exceptionHandling().accessDeniedPage("/accessdeniedpage")
//        .and().logout()
//        ;
//	}
//
//}

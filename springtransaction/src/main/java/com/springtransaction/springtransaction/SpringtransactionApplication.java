package com.springtransaction.springtransaction;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = "com.springtransaction")
public class SpringtransactionApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringtransactionApplication.class, args);
	}

}

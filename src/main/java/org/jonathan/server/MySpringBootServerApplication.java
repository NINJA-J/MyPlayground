package org.jonathan.server;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

import java.util.LinkedList;
import java.util.Queue;

@SpringBootApplication(exclude = DataSourceAutoConfiguration.class )
public class MySpringBootServerApplication {

    public static void main(String[] args) {
        SpringApplication.run(MySpringBootServerApplication.class, args);
        Queue<Integer> queue = new LinkedList<>();
    }

}

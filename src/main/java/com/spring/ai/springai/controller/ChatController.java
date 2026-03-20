package com.spring.ai.springai.controller;

import org.springframework.ai.chat.client.ChatClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ChatController {
    // @Autowired
    private final ChatClient chatClient;

    public ChatController(ChatClient.Builder builder){   // spring automatically inject ChatClient.Builder
        this.chatClient=builder.build();                  // builder.build this  actually made a object
    }

    @GetMapping("/chat")
    public ResponseEntity<String> chat(
         @RequestParam(value="q") String query){
           
        
            if (query == null || query.trim().isEmpty()) {
            return ResponseEntity.badRequest().body("Query cannot be empty");
              }

            try{
            String responseContent=this.chatClient
                                 .prompt(query)
                                 .call()
                                 .content();

                    return ResponseEntity.ok(responseContent);

            } catch(Exception e) {
                return ResponseEntity.internalServerError()
                              .body("Error communicating with AI model: " + e.getMessage());

            }
         }

}

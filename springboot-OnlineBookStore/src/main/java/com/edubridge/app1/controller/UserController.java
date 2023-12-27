package com.edubridge.app1.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import com.edubridge.app1.model.User;
import com.edubridge.app1.repo.IUserRepository;


@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {
	@Autowired
	private IUserRepository repo;
	
	@PostMapping("/login")
	public ResponseEntity<?> loginUser(@RequestBody User userData){
		System.out.println(userData);
		User user=repo.findByUserId(userData.getUserId());
		if(user.getPassword().equals(userData.getPassword()))
			return ResponseEntity.ok(user);

		return (ResponseEntity<?>) ResponseEntity.internalServerError();
	}
	
//	@RequestMapping(value = "/user", method = RequestMethod.POST)
//	@ResponseBody
//	public User loginUser(@RequestBody User userData) {
//	
//		User b=repo.findByUserId(userData.getUserId());
//		if (b != null) {
//
//			//System.out.println("Customer is created");
//			System.out.println("Customer is Created");
//			
//		} else {
//		//	System.out.println("not able to create book object");
//			System.out.println("Unable to Create the Customer data,Already the Customer Exists");
//
//		}
//		return b;
//	}
}
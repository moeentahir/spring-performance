package com.xyzz.gsdd.samplespringboot2.controllers

import com.xyzz.gsdd.samplespringboot2.models.Person
import com.xyzz.gsdd.samplespringboot2.services.PersonRegistrationService
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.HttpStatus.CREATED
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.ResponseStatus
import org.springframework.web.bind.annotation.RestController

@RestController("/persons")
class PersonController {
    @Autowired
    lateinit var personRegistrationService: PersonRegistrationService

    @PostMapping
    @ResponseStatus(CREATED)
    fun addPerson(@RequestBody person: Person): Person {
        val newPerson: Person = personRegistrationService.addPerson(person)
        personRegistrationService.logPerson(newPerson)
        return newPerson
    }
}

package com.laboratoire.xss_csrf.controller.constants;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
public class ConstantsController {

    @GetMapping(value = "/constants")
    @ResponseBody
    public Map<String, String> getConstants() {
        Map constantsMap = new HashMap<String, String>();

        constantsMap.put("version", "1.0.0");
        constantsMap.put("debug", "true");

        return constantsMap;
    }
}

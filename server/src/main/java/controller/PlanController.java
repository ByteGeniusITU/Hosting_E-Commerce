package controller;

import model.Plan;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import serviceImpl.PlanServiceImpl;

import java.util.List;

@RestController
@RequestMapping(path = "planes")
public class PlanController {
    @Autowired
    private PlanServiceImpl planService;

    @GetMapping("/todos")
    public ResponseEntity<List<Plan>> getAllPlans(){
        List<Plan> plans = planService.getPlanes();
        return new ResponseEntity<>(plans, HttpStatus.OK);
    }

    @GetMapping("/Ram")
    public ResponseEntity<List<Plan>> getAllRamPlans(){
        List<Plan> plans = planService.getPlanesRam();
        return new ResponseEntity<>(plans, HttpStatus.OK);
    }

    @GetMapping("/CPU")
    public ResponseEntity<List<Plan>> getAllCpuPlans(){
        List<Plan> plans = planService.getPlanesCpu();
        return new ResponseEntity<>(plans, HttpStatus.OK);
    }
}

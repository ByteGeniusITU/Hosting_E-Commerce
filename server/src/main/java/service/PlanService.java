package service;

import model.Plan;

import java.util.List;

public interface PlanService {
    List<Plan> getPlanes();
    List<Plan> getPlanesRam();
    List<Plan> getPlanesCpu();
}

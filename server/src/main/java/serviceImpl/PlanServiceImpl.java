package serviceImpl;

import model.Plan;
import org.springframework.beans.factory.annotation.Autowired;
import repository.PlanRepository;
import service.PlanService;

import java.util.List;

public class PlanServiceImpl implements PlanService {

    @Autowired
    private PlanRepository repository;

    @Override
    public List<Plan> getPlanes() {
        return repository.findAll();
    }

    @Override
    public List<Plan> getPlanesRam() {
        return repository.findAllByPlanTypeRAM();
    }

    @Override
    public List<Plan> getPlanesCpu() {
        return repository.findAllByPlanTypeCPU();
    }
}

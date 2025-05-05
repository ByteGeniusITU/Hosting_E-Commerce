package serviceImpl;

import model.Plan;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import repository.PlanRepository;
import service.PlanService;

import java.util.List;

@Service
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

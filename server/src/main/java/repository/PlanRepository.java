package repository;

import model.Plan;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;


public interface PlanRepository extends JpaRepository<Plan, Long> {
    @Query(value = "SELECT * FROM Plan WHERE p.tipo = 'RAM'")
    List<Plan> findAllByPlanTypeRAM();

    @Query(value = "SELECT * FROM Plan  WHERE p.tipo = 'CPU'")
    List<Plan> findAllByPlanTypeCPU();
}

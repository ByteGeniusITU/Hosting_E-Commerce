package repository;

import model.Plan;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PlanRepository extends JpaRepository<Plan, Long> {
    @Query(value = "SELECT * FROM planes WHERE p.tipo = 'RAM'")
    List<Plan> findAllByPlanTypeRAM();

    @Query(value = "SELECT * FROM planes  WHERE p.tipo = 'CPU'")
    List<Plan> findAllByPlanTypeCPU();
}

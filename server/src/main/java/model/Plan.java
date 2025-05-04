package model;

import enums.PlanStatus;
import enums.PlanType;
import jakarta.persistence.*;
import java.util.List;

@Entity
public class Plan {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long idPlan;

    @ManyToOne
    @JoinColumn(name = "id_videojuego")
    private Videojuego videojuego;

    @Basic
    private PlanType tipo;
    private int cantidad;
    private int precio_hora;
    private PlanStatus estado;

    @OneToMany(mappedBy = "planCpu")
    private List<Servicio> serviciosCpu;

    @OneToMany(mappedBy = "planRam")
    private List<Servicio> serviciosRam;

}

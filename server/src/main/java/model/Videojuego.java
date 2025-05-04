package model;

import jakarta.persistence.*;

import java.util.List;

@Entity
public class Videojuego {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idVj;

    @Basic
    private String nombre;

    @OneToMany(mappedBy = "videojuego")
    private List<Plan> planes;

    @OneToMany(mappedBy = "videojuego")
    private List<Servicio> servicios;

}

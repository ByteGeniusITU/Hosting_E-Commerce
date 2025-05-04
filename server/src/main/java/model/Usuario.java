package model;

import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
public class Usuario {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long idUser;

    @Column(unique = true, nullable = false)
    private String auth0id;

    @OneToMany(mappedBy = "user")
    private List<Servicio> servicios = new ArrayList<>();
}

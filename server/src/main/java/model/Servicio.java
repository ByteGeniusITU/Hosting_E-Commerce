package model;

import enums.PaymentStatus;
import enums.ServerStatus;
import jakarta.persistence.*;

@Entity
public class Servicio {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @ManyToOne
    @JoinColumn(name = "Id_Usuario")
    private Usuario user;

    @ManyToOne
    @JoinColumn(name = "Id_videojuego")
    private Videojuego videojuego;

    @ManyToOne
    @JoinColumn(name = "id_Plan_CPU")
    private Plan planCpu;

    @ManyToOne
    @JoinColumn(name = "id_Plan_RAM")
    private Plan planRam;

    @Basic
    private PaymentStatus estadoPago;
    private ServerStatus estadoServidor;
}

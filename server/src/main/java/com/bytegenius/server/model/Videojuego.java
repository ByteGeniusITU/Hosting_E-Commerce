package com.bytegenius.server.model;

import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "videojuegos")
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

    public Videojuego() {
    }

    public Videojuego(int idVj, String nombre, List<Plan> planes, List<Servicio> servicios) {
        this.idVj = idVj;
        this.nombre = nombre;
        this.planes = planes;
        this.servicios = servicios;
    }

    public int getIdVj() {
        return idVj;
    }

    public void setIdVj(int idVj) {
        this.idVj = idVj;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public List<Plan> getPlanes() {
        return planes;
    }

    public void setPlanes(List<Plan> planes) {
        this.planes = planes;
    }

    public void addPlanes(Plan plan){
        this.planes.add(plan);
    }

    public void removePlanes(Plan plan){
        this.planes.remove(plan);
    }

    public List<Servicio> getServicios() {
        return servicios;
    }

    public void setServicios(List<Servicio> servicios) {
        this.servicios = servicios;
    }

    public void addServicios(Servicio servicio) {
        this.servicios.add(servicio);
    }

    public void removeServicios(Servicio servicio) {
        this.servicios.remove(servicio);
    }
}

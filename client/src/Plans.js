import { useState } from "react";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Plans.css';

const Plans = () => {

    // Selección de plan de RAM
    const ramPlans = document.querySelectorAll('.plan-card');
    const ramPriceElement = document.getElementById('ram-price');
    let selectedRamPrice = 16.87; // Precio por defecto (6GB)

    ramPlans.forEach(plan => {
        plan.addEventListener('click', function() {
            // Quitar clase popular de todos los planes
            ramPlans.forEach(p => {
                if (p.classList.contains('popular')) {
                    p.classList.remove('popular');
                    // Restaurar colores originales
                    p.querySelector('.ram-size').style.color = 'var(--primary)';
                }
            });

            // Añadir clase popular al plan seleccionado
            this.classList.add('popular');

            // Cambiar colores del texto
            this.querySelector('.ram-size').style.color = 'white';

            // Actualizar precio según el plan seleccionado
            const planId = this.id;
            switch(planId) {
                case 'plan-2gb':
                    selectedRamPrice = 5.99;
                    ramPriceElement.textContent = '$5.99';
                    break;
                case 'plan-4gb':
                    selectedRamPrice = 11.24;
                    ramPriceElement.textContent = '$11.24';
                    break;
                case 'plan-6gb':
                    selectedRamPrice = 16.87;
                    ramPriceElement.textContent = '$16.87';
                    break;
                case 'plan-8gb':
                    selectedRamPrice = 20.99;
                    ramPriceElement.textContent = '$20.99';
                    break;
            }

            updateTotal();
        });
    });

    // Selección de núcleos CPU
    const cpuCards = document.querySelectorAll('.cpu-card');
    const cpuPriceElement = document.getElementById('cpu-price');
    let selectedCpuPrice = 10.00; // Precio por defecto (2 núcleos)

    cpuCards.forEach(card => {
        card.addEventListener('click', function() {
            // Quitar clase selected de todas las tarjetas
            cpuCards.forEach(c => c.classList.remove('selected'));

            // Añadir clase selected a la tarjeta seleccionada
            this.classList.add('selected');

            // Actualizar precio según los núcleos seleccionados
            const cpuId = this.id;
            switch(cpuId) {
                case 'cpu-1':
                    selectedCpuPrice = 5.00;
                    cpuPriceElement.textContent = '$5.00';
                    break;
                case 'cpu-2':
                    selectedCpuPrice = 10.00;
                    cpuPriceElement.textContent = '$10.00';
                    break;
                case 'cpu-4':
                    selectedCpuPrice = 18.00;
                    cpuPriceElement.textContent = '$18.00';
                    break;
                case 'cpu-8':
                    selectedCpuPrice = 32.00;
                    cpuPriceElement.textContent = '$32.00';
                    break;
            }

            updateTotal();
        });
    });

    // Actualizar precio total
    function updateTotal() {
        const totalPrice = selectedRamPrice + selectedCpuPrice;
        document.getElementById('total-price').textContent = '$' + totalPrice.toFixed(2);
    }

    // Selección de moneda
    const currencyButtons = document.querySelectorAll('.currency-btn');

    currencyButtons.forEach(button => {
        button.addEventListener('click', function() {
            currencyButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Selección de facturación
    const billingOptions = document.querySelectorAll('.billing-option');

    billingOptions.forEach(option => {
        option.addEventListener('click', function() {
            billingOptions.forEach(opt => opt.classList.remove('active'));
            this.classList.add('active');
        });
    });

    return (
        <div class="container py-5">
            <div class="plan-header">
                <h1 class="mb-3">SELECT PLAN</h1>
                <p class="text-muted">Not sure what plan to choose? Check out our <a href="#" class="guide-link">RAM calculator guide</a>.</p>

                <div class="d-flex justify-content-between align-items-center flex-wrap">
                    <div class="currency-selector">
                        <button class="currency-btn active">$</button>
                        <button class="currency-btn">€</button>
                        <button class="currency-btn">£</button>
                        <button class="currency-btn">A$</button>
                        <button class="currency-btn">C$</button>
                    </div>

                    <div class="billing-options">
                        <div class="billing-option active">Facturado Mensualmente</div>
                        <div class="billing-option">Facturado Trimestralmente (10% de Descuento)</div>
                    </div>
                </div>
            </div>

            <div class="row g-4">
                <div class="col-md-6 col-lg-3">
                    <div class="plan-card" id="plan-2gb">
                        <h2 class="ram-size">2</h2>
                        <div class="ram-label">GB RAM</div>
                        <div class="plan-description">
                            Servidores básicos & algunos modpacks. Mínimo para Minecraft: Java Edition
                        </div>
                        <div class="price-first">$5.99 primer mes</div>
                        <div class="price-recurring">Precio Recurrente $7.99</div>
                        <button class="btn btn-success btn-buy">Comprar Ahora</button>
                    </div>
                </div>

                <div class="col-md-6 col-lg-3">
                    <div class="plan-card" id="plan-4gb">
                        <h2 class="ram-size">4</h2>
                        <div class="ram-label">GB RAM</div>
                        <div class="plan-description">
                            Servidores básicos & muchos modpacks
                        </div>
                        <div class="price-first">$11.24 primer mes</div>
                        <div class="price-recurring">Precio Recurrente $14.99</div>
                        <button class="btn btn-success btn-buy">Comprar Ahora</button>
                    </div>
                </div>

                <div class="col-md-6 col-lg-3">
                    <div class="plan-card popular" id="plan-6gb">
                        <span class="popular-badge">popular</span>
                        <h2 class="ram-size">6</h2>
                        <div class="ram-label">GB RAM</div>
                        <div class="plan-description">
                            Servidores básicos & muchos modpacks
                        </div>
                        <div class="price-first">$16.87 primer mes</div>
                        <div class="price-recurring">Precio Recurrente $22.49</div>
                        <button class="btn btn-success btn-buy">Comprar Ahora</button>
                    </div>
                </div>

                <div class="col-md-6 col-lg-3">
                    <div class="plan-card" id="plan-8gb">
                        <h2 class="ram-size">8</h2>
                        <div class="ram-label">GB RAM</div>
                        <div class="plan-description">
                            Servidores avanzados & todos los modpacks
                        </div>
                        <div class="price-first">$20.99 primer mes</div>
                        <div class="price-recurring">Precio Recurrente $27.99</div>
                        <button class="btn btn-success btn-buy">Comprar Ahora</button>
                    </div>
                </div>
            </div>

            <div class="show-more">
                <button class="btn btn-primary">Show More</button>
            </div>

            <div class="cpu-selector">
                <h2 class="section-title">SELECCIONA NÚCLEOS CPU</h2>
                <div class="row g-4">
                    <div class="col-md-6 col-lg-3">
                        <div class="cpu-card" id="cpu-1">
                            <div class="cpu-size">1</div>
                            <div class="cpu-label">Núcleo CPU</div>
                            <div class="cpu-description mb-3">
                                Ideal para servidores pequeños con pocos jugadores
                            </div>
                            <div class="cpu-price">$5.00 / mes</div>
                        </div>
                    </div>

                    <div class="col-md-6 col-lg-3">
                        <div class="cpu-card selected" id="cpu-2">
                            <div class="cpu-size">2</div>
                            <div class="cpu-label">Núcleos CPU</div>
                            <div class="cpu-description mb-3">
                                Recomendado para la mayoría de servidores
                            </div>
                            <div class="cpu-price">$10.00 / mes</div>
                        </div>
                    </div>

                    <div class="col-md-6 col-lg-3">
                        <div class="cpu-card" id="cpu-4">
                            <div class="cpu-size">4</div>
                            <div class="cpu-label">Núcleos CPU</div>
                            <div class="cpu-description mb-3">
                                Para servidores con muchos jugadores y plugins
                            </div>
                            <div class="cpu-price">$18.00 / mes</div>
                        </div>
                    </div>

                    <div class="col-md-6 col-lg-3">
                        <div class="cpu-card" id="cpu-8">
                            <div class="cpu-size">8</div>
                            <div class="cpu-label">Núcleos CPU</div>
                            <div class="cpu-description mb-3">
                                Rendimiento máximo para servidores grandes
                            </div>
                            <div class="cpu-price">$32.00 / mes</div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="summary-section">
                <h3 class="summary-title">Resumen de tu plan</h3>

                <div class="summary-item">
                    <span>Memoria RAM (6 GB)</span>
                    <span id="ram-price">$16.87</span>
                </div>

                <div class="summary-item">
                    <span>Núcleos CPU (2)</span>
                    <span id="cpu-price">$10.00</span>
                </div>

                <div class="summary-total">
                    <span>Total Mensual:</span>
                    <span id="total-price">$26.87</span>
                </div>

                <button class="btn btn-success btn-buy">Contratar Ahora</button>
            </div>
        </div>
    );
};

export default Plans;
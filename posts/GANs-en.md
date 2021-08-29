---
title: 'Generative Adversarial Networks'
date: 'August 29, 2021'
excerpt: 'In this review, we will be looking at the generative adversarial networks which I have learned during my final project. In my final project, I utilized the GANs to get clean images from the distorted and blurred images.'
---

Generative Adversarial Networks are an approach to generative modeling using deep learning methods. Generative modeling is an unsupervised learning task in machine learning, that uses AI algorithms to identify patterns in dataset containing data points neither classified nor labeled. Unsupervised Learning Algorithms allow users to perform more complex processing tasks compared to supervised learning. The GAN architecture was first introduced in the 2014 paper by Ian Goodfellow, et al.<font style="color:#0070f3;">[**[1]**](https://arxiv.org/pdf/1406.2661.pdf)</font>. In order to generate images, that properly could have been drawn from the original dataset, the GAN models can be used.

<div style="text-align:center"><img src="https://miro.medium.com/max/601/1*Y_AGVp0EEGEpB1Q25G6edQ.jpeg" 
alt="GANs model architecture" /></div>
<p style="text-align:center; font-size:12px; font-weight:300">Example of the Generative Adversarial Network Model Architecture</p>

Latent space refers to an abstract multi-dimensional space containing feature values that we cannot evaluate directly, but which encodes a meaningful internal representation of outside observed events. The latent space can be replaced by random noise or the images on which we want to make translation. This depends on the architecture of the gan model we want to use.

Vanilla GAN is the simplest type GAN. The Generator and the Discriminator
are simple multi-layer perceptrons. In vanilla GAN, algorithm tries to
optimize the mathematical equation using stochastic gradient descent.

### LOSS FUNCTIONS
> ### Discriminator Loss
>
> * The discriminator’s loss function determines and measures how good or badthe discriminator’s predictions are. When the discriminator loss is lower, that determines the more accurate it becomes at identifying synthetic image pairs.

> ### Generator Loss
>
> * The generator loss measures how real the synthetic images look. By minimizing this, the generator could produce more realistic images. To improve the aesthetics of the generated image, the authors of the pix2pix paper added an L1 loss term. This term loss calculates the L1 distance between the target image and the generated image. Each of the losses is then multiplied by its specific lambda parameter and added to the generator loss.

<center><h2>Pix2Pix</h2></center>

In my project, I used Pix2Pix to generate the training dataset to be used by the GAN network, which mitigates the distortion. It's not really easy to collect turbulent distorted images in real life, so I decided to use another GAN model, Pix2Pix, to generate turbulent induced image sets.

Pix2pix is a type of conditional GAN, that does paired image translation,
originally introduced by Phillip Isola et al.<font style="color:#0070f3;">[**[2]**](https://arxiv.org/pdf/1611.07004.pdf)</font>. Given a training set which contains pairs of related images (“A” and “B”), a pix2pix model learns how to convert an image of type “A” into an image of type “B”, or vice-versa.

Pairing the input and then an output for training dataset every single input example that you might have you have a corresponding output image or target image (turbulent image in my case). So it maps one-on-one. You condition on the input to get the output image.

Pix2Pix GAN has a generator and a discriminator just like a normal GAN would have. For turbulent image generation task, the input undistorted image is processed by the generator model and it produces turbulent version of the input as output. In Pix2Pix, the generator is a convolutional network with U-Net architecture.

It takes in the input image, passes it through a series of convolution and up-sampling layers. Finally, it produces an output image that is of the same size as the input but has turbulence distortions.

--- 
<h2 style="text-align: center">Some Results of Pix2Pix Network</h2>


<div style="text-align:center">

![n1](/images/GANs/n1.png) ![t1](/images/GANs/t1.png)  

![n2](/images/GANs/n2.png) ![t2](/images/GANs/t2.png)  
</div>

<p style="text-align:center; font-size:12px; font-weight:300">
Clean input - Output of the network
</p>


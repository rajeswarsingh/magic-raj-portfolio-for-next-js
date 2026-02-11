"use client";
import { Column, Row, Text, Tag, Line, Button, Heading, RevealFx } from "@once-ui-system/core";
import { consulting } from "@/resources";

export const ConsultingSection = () => {
  if (!consulting.display) return null;

  return (
    <Column
      fillWidth
      gap="64"
      paddingY="96"
      paddingX="24"
      background="surface"
      radius="l"
      border="neutral-alpha-weak"
      style={{
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background decoration */}
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "600px",
          height: "600px",
          background: "radial-gradient(circle, var(--brand-alpha-weak) 0%, transparent 70%)",
          opacity: 0.3,
          pointerEvents: "none",
        }}
      />

      <Column fillWidth maxWidth="l" gap="64" style={{ position: "relative", zIndex: 1 }}>
        {/* Header */}
        <RevealFx translateY="4">
          <Column gap="24" align="center" textAlign="center">
            <Tag label="Services" size="m" variant="brand" />

            <Heading
              as="h2"
              variant="display-strong-xl"
              onBackground="neutral-strong"
              wrap="balance"
            >
              {consulting.title}
            </Heading>

            <Text
              variant="heading-strong-l"
              onBackground="neutral-medium"
              maxWidth="32"
              wrap="balance"
            >
              {consulting.subtitle}
            </Text>

            <Text
              variant="body-default-m"
              onBackground="neutral-weak"
              maxWidth="40"
            >
              {consulting.description}
            </Text>
          </Column>
        </RevealFx>

        {/* Services Grid */}
        <RevealFx translateY="8" delay={0.2}>
          <Row
            fillWidth
            wrap
            gap="24"
            horizontal="center"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            }}
          >
            {consulting.services.map((service, index) => (
              <Column
                key={index}
                gap="16"
                padding="32"
                radius="l"
                background="page"
                border="neutral-alpha-weak"
                style={{
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.boxShadow = "0 20px 60px var(--shadow-strong)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <Text
                  variant="display-strong-s"
                  style={{ fontSize: "2.5rem", lineHeight: 1 }}
                >
                  {service.icon}
                </Text>

                <Heading
                  as="h3"
                  variant="heading-strong-m"
                  onBackground="neutral-strong"
                >
                  {service.title}
                </Heading>

                <Column gap="8" paddingTop="8">
                  {service.items.map((item, idx) => (
                    <Row key={idx} gap="12" vertical="start">
                      <Text
                        variant="body-default-xs"
                        onBackground="brand-strong"
                        style={{ marginTop: "4px" }}
                      >
                        ✓
                      </Text>
                      <Text
                        variant="body-default-s"
                        onBackground="neutral-medium"
                        style={{ flex: 1 }}
                      >
                        {item}
                      </Text>
                    </Row>
                  ))}
                </Column>
              </Column>
            ))}
          </Row>
        </RevealFx>

        <Line background="neutral-alpha-weak" />

        {/* Domains */}
        <RevealFx translateY="8" delay={0.3}>
          <Column gap="32" align="center" textAlign="center">
            <Column gap="16">
              <Heading
                as="h3"
                variant="heading-strong-l"
                onBackground="neutral-strong"
              >
                🧩 Domains I've Worked In
              </Heading>
            </Column>

            <Row
              fillWidth
              wrap
              gap="16"
              horizontal="center"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                maxWidth: "48rem",
              }}
            >
              {consulting.domains.map((domain, index) => (
                <Column
                  key={index}
                  gap="8"
                  padding="20"
                  radius="m"
                  background="surface"
                  border="neutral-alpha-medium"
                >
                  <Text variant="label-strong-s" onBackground="brand-strong">
                    {domain.name}
                  </Text>
                  <Text variant="body-default-xs" onBackground="neutral-weak">
                    {domain.description}
                  </Text>
                </Column>
              ))}
            </Row>
          </Column>
        </RevealFx>

        <Line background="neutral-alpha-weak" />

        {/* Why Work With Me */}
        <RevealFx translateY="8" delay={0.4}>
          <Column gap="24" align="center" textAlign="center" maxWidth="40">
            <Heading as="h3" variant="heading-strong-l" onBackground="neutral-strong">
              🎯 Why Work With Me?
            </Heading>

            <Column gap="12">
              {consulting.whyWorkWithMe.map((reason, index) => (
                <Row key={index} gap="12" vertical="center" horizontal="center">
                  <Text variant="body-default-xs" onBackground="brand-strong">
                    ✔
                  </Text>
                  <Text variant="body-default-m" onBackground="neutral-medium">
                    {reason}
                  </Text>
                </Row>
              ))}
            </Column>

            <Text
              variant="heading-default-m"
              onBackground="neutral-strong"
              style={{
                marginTop: "16px",
                fontStyle: "italic",
              }}
            >
              I don't just advise — I help you build and ship.
            </Text>
          </Column>
        </RevealFx>

        {/* Mentoring */}
        {consulting.mentoring.display && (
          <>
            <Line background="neutral-alpha-weak" />

            <RevealFx translateY="8" delay={0.5}>
              <Column gap="16" align="center" textAlign="center">
                <Heading as="h3" variant="heading-strong-l" onBackground="neutral-strong">
                  👨‍🏫 {consulting.mentoring.title}
                </Heading>
                <Text variant="body-default-m" onBackground="neutral-medium" maxWidth="32">
                  In addition to consulting, I also:
                </Text>
                <Column gap="8">
                  {consulting.mentoring.items.map((item, index) => (
                    <Text key={index} variant="body-default-s" onBackground="neutral-weak">
                      • {item}
                    </Text>
                  ))}
                </Column>
              </Column>
            </RevealFx>
          </>
        )}

        <Line background="neutral-alpha-weak" />

        {/* CTA */}
        <RevealFx translateY="8" delay={0.6}>
          <Column gap="32" align="center" textAlign="center">
            <Column gap="16">
              <Heading as="h3" variant="heading-strong-xl" onBackground="neutral-strong">
                🤝 {consulting.cta.title}
              </Heading>
              <Text variant="body-default-l" onBackground="neutral-medium" maxWidth="40">
                {consulting.cta.description}
              </Text>
            </Column>

            <Row gap="16" horizontal="center" wrap>
              {consulting.cta.buttons.map((button, index) => (
                <Button
                  key={index}
                  href={button.link}
                  variant={button.primary ? "primary" : "secondary"}
                  size="l"
                >
                  {button.label}
                </Button>
              ))}
            </Row>

            <Column gap="8" align="center" marginTop="24">
              <Text variant="label-default-s" onBackground="neutral-weak">
                📩 Get in Touch
              </Text>
              <Text variant="body-default-s" onBackground="neutral-medium" textAlign="center">
                Book a consultation/discovery call • Email me to discuss your product challenge
              </Text>
            </Column>
          </Column>
        </RevealFx>
      </Column>
    </Column>
  );
};
